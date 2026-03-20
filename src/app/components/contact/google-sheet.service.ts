const APPS_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbzDx1Sg7KZLX_CUX5Jowfy1vLg-ODoMeLZXz9z95oszyUTofoPuigpsOLjmHkUv9kRj/exec';

export async function insertInGoogleSheet(fila: string[]) {
  const url = `${APPS_SCRIPT_URL}?fila=${encodeURIComponent(
    JSON.stringify(fila)
  )}`;

  await fetch(url, {
    method: 'POST',
    mode: 'no-cors',
  });

  console.log('Enviado (revisar el Sheet para confirmar)');
}
