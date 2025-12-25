export default function normalizeInput(value) {
  return value.replace(/[^\d+]/g, '');
}
