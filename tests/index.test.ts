import { addition } from "../src/index";

describe("addition", () => {
  it("devrait retourner la somme correcte pour deux positifs", () => {
    expect(addition(2, 3)).toBe(5);
  });

  it("devrait retourner la somme de deux nombres négatifs", () => {
    expect(addition(-2, -3)).toBe(-5);
  });

  it("devrait retourner la somme d'un nombre positif et d'un nombre négatif", () => {
    expect(addition(2, -3)).toBe(-1);
  });

  it("devrait retourner la somme quand un nombre est zéro", () => {
    expect(addition(0, 5)).toBe(5);
    expect(addition(5, 0)).toBe(5);
  });

  it("devrait gérer les nombres négatifs", () => {
    expect(addition(-1, -2)).toBe(-3);
  });

  it("devrait gérer zéro", () => {
    expect(addition(0, 0)).toBe(0);
    expect(addition(0, 5)).toBe(5);
    expect(addition(-5, 0)).toBe(-5);
  });

  it("devrait gérer les nombres à virgule", () => {
    expect(addition(1.5, 2.3)).toBeCloseTo(3.8);
    expect(addition(-1.1, 2.2)).toBeCloseTo(1.1);
  });

  it("devrait gérer les très grands nombres", () => {
    expect(addition(Number.MAX_SAFE_INTEGER, 1)).toBe(
      Number.MAX_SAFE_INTEGER + 1,
    );
  });

  it("devrait gérer les très petits nombres", () => {
    expect(addition(Number.MIN_SAFE_INTEGER, -1)).toBe(
      Number.MIN_SAFE_INTEGER - 1,
    );
  });
});
