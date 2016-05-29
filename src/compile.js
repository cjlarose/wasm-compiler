export default function compile(source) {
  return new Uint8Array([
    /* Magic number, version (11) */
    /* Type section */
    /* section title length (4), section title "type", payload length (1.3 million?) */
    0x00, 0x61, 0x73, 0x6d, 0x0b, 0x00, 0x00, 0x00, 0x04, 0x74, 0x79, 0x70, 0x65, 0x85, 0x80, 0x80,
    /* Entry count (1), Function, param count (0), return count (1), return type i32 */
    /* Function section */
    /* section title length (8), section title "function" */
    0x80, 0x00, 0x01, 0x40, 0x00, 0x01, 0x01, 0x08, 0x66, 0x75, 0x6e, 0x63, 0x74, 0x69, 0x6f, 0x6e,
    /* payload length (1 million?), function count 1, index 0 */
    /* section title length (6), section title "memory", payload length (1.3 million) */
    0x82, 0x80, 0x80, 0x80, 0x00, 0x01, 0x00, 0x06, 0x6d, 0x65, 0x6d, 0x6f, 0x72, 0x79, 0x85, 0x80,
    /* */
    0x80, 0x80, 0x00, 0x80, 0x02, 0x80, 0x02, 0x00, 0x06, 0x65, 0x78, 0x70, 0x6f, 0x72, 0x74, 0x88,
    0x80, 0x80, 0x80, 0x00, 0x01, 0x00, 0x05, 0x65, 0x6e, 0x74, 0x72, 0x79, 0x04, 0x63, 0x6f, 0x64,
    0x65, 0x8b, 0x80, 0x80, 0x80, 0x00, 0x01, 0x85, 0x80, 0x80, 0x80, 0x00, 0x00, 0x10, 0x2a, 0x09,
    0x01, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x88, 0x80, 0x80, 0x80, 0x00, 0x01, 0x05, 0x65, 0x6e, 0x74,
    0x72, 0x79, 0x00,
  ]);
}
