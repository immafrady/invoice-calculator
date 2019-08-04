export function encodeData(data: any): string {
  try {
    const rawData = JSON.stringify(data || '');
    const uri = encodeURIComponent(rawData);
    return window.btoa(uri);
  } catch (e) {
    return '';
  }
}

export function decodeData(rawString: string): any {
  try {
    const uri = window.atob(rawString);
    const rawData = decodeURIComponent(uri);
    return JSON.parse(rawData);
  } catch (e) {
    return [];
  }
}
