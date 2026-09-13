import { NextRequest, NextResponse } from 'next/server';

const TOKEN = '486464';
const PRICES_URL = 'https://api.travelpayouts.com/aviasales/v3/prices_for_dates';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  
  const params = new URLSearchParams();
  params.set('token', TOKEN);
  params.set('currency', searchParams.get('currency') || 'usd');
  params.set('sorting', searchParams.get('sorting') || 'price');
  params.set('limit', searchParams.get('limit') || '10');
  
  const origin = searchParams.get('origin');
  const destination = searchParams.get('destination');
  const departure_at = searchParams.get('departure_at');
  const return_at = searchParams.get('return_at');
  
  if (origin) params.set('origin', origin);
  if (destination) params.set('destination', destination);
  if (departure_at) params.set('departure_at', departure_at);
  if (return_at) params.set('return_at', return_at);
  
  try {
    const res = await fetch(`${PRICES_URL}?${params.toString()}`);
    
    if (!res.ok) {
      if (departure_at) {
        const monthParams = new URLSearchParams(params);
        monthParams.set('departure_at', departure_at.substring(0, 7));
        monthParams.delete('return_at');
        const monthRes = await fetch(`${PRICES_URL}?${monthParams.toString()}`);
        if (monthRes.ok) {
          const monthData = await monthRes.json();
          return NextResponse.json({ ...monthData, fallback: true });
        }
      }
      return NextResponse.json({ data: [], success: false });
    }
    
    const data = await res.json();
    
    if ((!data.data || data.data.length === 0) && departure_at) {
      const monthParams = new URLSearchParams(params);
      monthParams.set('departure_at', departure_at.substring(0, 7));
      monthParams.delete('return_at');
      const monthRes = await fetch(`${PRICES_URL}?${monthParams.toString()}`);
      if (monthRes.ok) {
        const monthData = await monthRes.json();
        if (monthData.data && monthData.data.length > 0) {
          return NextResponse.json({ ...monthData, fallback: true });
        }
      }
    }
    
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ data: [], success: false });
  }
}
