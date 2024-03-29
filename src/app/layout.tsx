import Providers from "@/components/Providers";
import { inter } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import "../styles/globals.css";
import { Suspense } from "react";

export const metadata: Metadata = {
	title: {
		template: "%s | Qaree",
		default: "Qaree",
	},
	description: "Qaree publish service",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="h-full" suppressHydrationWarning>
			<body className={cn("flex h-full antialiased", inter.className)}>
				<Providers>
					<Suspense>
						<main className="flex-1">{children}</main>
					</Suspense>
				</Providers>
			</body>
		</html>
	);
}
