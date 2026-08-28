import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "梅花问易｜AI 梅花易数决策与反思工具", description: "遵循梅花易数规则起卦，用现代白话梳理趋势、关键变量与行动建议。", icons: { icon: "/favicon.svg" } };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="zh-CN"><body>{children}</body></html>}
