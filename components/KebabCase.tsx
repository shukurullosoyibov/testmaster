export function KebabCase({ words }: { words: string }) {
    if (!words) return ''; // agar words undefined yoki null bo'lsa, bo'sh qator qaytariladi
    return words
        .replace(/([a-z])([A-Z])/g, "$1-$2")
        .replace(/[\s_]+/g, '-')
        .toLowerCase();
}
