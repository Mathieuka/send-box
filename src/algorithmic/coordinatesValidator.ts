export function isValidCoordinates(coordinates?: string): boolean {
    const regex = /^(-{1})?\d{1,}(.{1})?(\d{1,})?$/;
    if (!coordinates) return false;
    const [long, lat] = coordinates.split(', ');
    if (!regex.test(long) || !regex.test(lat)) return false;
    if (parseFloat(long) < -90 || parseFloat(long) > 90) return false;
    if (parseFloat(lat) < -180 || parseFloat(lat) > 180) return false;
    return true;
}
