"use client";

import Link from "next/link";
import { Button } from "@/app/components/ui/button";

export const dynamic = 'force-dynamic';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-prak-light to-white px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-prak-teal to-prak-yellow bg-clip-text text-transparent">
          404
        </h1>
        <h2 className="text-2xl font-bold mb-4 text-prak-dark">
          Página no encontrada
        </h2>
        <p className="text-prak-gray-dark mb-8">
          Lo sentimos, la página que buscas no existe o ha sido movida.
        </p>
        <Link href="/">
          <Button className="bg-gradient-premium hover:shadow-premium text-prak-dark font-bold">
            Volver al inicio
          </Button>
        </Link>
      </div>
    </div>
  );
}
