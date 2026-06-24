import { NextResponse } from 'next/server';


export async function GET (){
    
      
        const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=30&page=1';
        
        try {

            const response = await fetch(url,
            {
                next: {
                    revalidate: 60,
                    cache: 'no-store',
                
                }
            }
            )

            const data = await response.json()
            return NextResponse.json(data)

        } catch (error) {

            console.error("Failed to fetch crypto data:", error);
            
        }
    }

