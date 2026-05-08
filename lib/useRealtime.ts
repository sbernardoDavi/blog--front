"use client";

import { useState, useEffect } from "react";
import { supabase } from "./supabase";

type UseRealtimeOptions<T> = {
  table: string;
  select: string;
  orderBy?: { column: string; ascending?: boolean };
  initialData: T[];
};

/**
 * Hook genérico que escuta mudanças em tempo real de uma tabela do Supabase.
 * Recebe os dados iniciais (vindos do servidor) e mantém o state atualizado via WebSocket.
 */
export function useRealtime<T>({
  table,
  select,
  orderBy,
  initialData,
}: UseRealtimeOptions<T>): T[] {
  const [data, setData] = useState<T[]>(initialData);

  useEffect(() => {
    setData(initialData);
  }, [initialData]);

  useEffect(() => {
    const channel = supabase
      .channel(`${table}-realtime`)
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table },
        async () => {
          let query = supabase.from(table).select(select);

          if (orderBy) {
            query = query.order(orderBy.column, {
              ascending: orderBy.ascending ?? false,
            });
          }

          const { data: fresh } = await query;
          if (fresh) setData(fresh as T[]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [table, select, orderBy]);

  return data;
}
