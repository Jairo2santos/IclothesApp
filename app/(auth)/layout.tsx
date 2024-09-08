import { ClerkProvider } from "@clerk/nextjs"
import { Inter } from "next/font/google"
import  "../globals.css";

export const metadata ={
    title: 'Iclothes',
    description: 'Red social de moda y tendencias'
}

// fonts
const inter = Inter({subsets: ["latin"]})

export default function RootLayout({children}: {children:React.ReactNode}){
    return (<ClerkProvider>
        <html lang="es">
            <body className={`${inter.className} bg-dark-1`}>
                {children}
            </body>

        </html>
    </ClerkProvider>)
}