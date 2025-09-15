import { Fingerprint, ShieldAlert } from 'lucide-react';
import { useEffect } from 'react';

export const Home = () => {
  useEffect(() => {
    fetch('localhost:');
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[hsl(var(--background))]">
      {/* Ambient background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-noise" />
      <div className="pointer-events-none absolute -top-40 -left-40 h-[32rem] w-[32rem] rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-10rem] right-[-10rem] h-[28rem] w-[28rem] rounded-full bg-fuchsia-500/10 blur-3xl" />

      <main className="mx-auto flex min-h-screen max-w-4xl items-center justify-center px-6 py-16">
        <section className="glow relative w-full rounded-2xl border border-border/60 bg-gradient-to-b from-[hsla(210,40%,6%,0.75)] to-[hsla(210,40%,3%,0.6)] p-8 sm:p-12 backdrop-blur">
          {/* Header / Badge */}
          <div className="mb-6 flex items-center justify-between">
            <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary/40 px-3 py-1 text-xs text-muted-foreground">
              <Fingerprint className="h-3.5 w-3.5 text-primary" />
              Acceso no confiable detectado
            </div>
            <img
              className="w-44 select-none"
              draggable={false}
              src="/logo.png"
            />
          </div>

          {/* Icon + Title */}
          <div className="mb-6 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-destructive/15 ring-1 ring-destructive/30">
              <ShieldAlert className="h-6 w-6 text-destructive" />
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              Te atrapamos entrando a una URL no confiable
            </h1>
          </div>

          {/* Body copy */}
          <p className="max-w-3xl text-balance text-muted-foreground">
            Esta es una simulación controlada de nuestra campaña de phishing. El
            objetivo es ayudarte a reconocer señales de riesgo antes de hacer
            clic.{' '}
            <strong className="text-white">
              Ningún dato ha sido comprometido.
            </strong>
          </p>

          {/* Callouts */}
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg border border-border/60 bg-secondary/30 p-4">
              <p className="text-sm font-semibold text-white">Lo que pasó</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Visitaste un enlace potencialmente peligroso.
              </p>
            </div>
            <div className="rounded-lg border border-border/60 bg-secondary/30 p-4">
              <p className="text-sm font-semibold text-white">
                Por qué importa
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Los atacantes buscan credenciales y datos sensibles.
              </p>
            </div>
            <div className="rounded-lg border border-border/60 bg-secondary/30 p-4">
              <p className="text-sm font-semibold text-white">Próximo paso</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Aprende a identificar señales de phishing a simple vista.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
