import { supabase } from "./supabase";
import { CalendarEvent } from "@/app/components/Calendar/Calendar";
import { article } from "@/app/components/Artigos/Artigos";

export async function getArtigos(): Promise<article[]> {
  const { data, error } = await supabase
    .from("artigos")
    .select("tema, autor, resumo, pdf_url")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Erro ao buscar artigos:", error.message);
    return [];
  }

  return data ?? [];
}

export async function getEventos(): Promise<CalendarEvent[]> {
  const { data, error } = await supabase
    .from("eventos")
    .select("title, date, time, description, location")
    .order("date", { ascending: true });

  if (error) {
    console.error("Erro ao buscar eventos:", error.message);
    return [];
  }

  return data ?? [];
}

export async function getVideos() {
  const { data, error } = await supabase
    .from("videos")
    .select("titulo, conteudo, url")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Erro ao buscar vídeos:", error.message);
    return [];
  }

  return data ?? [];
}
