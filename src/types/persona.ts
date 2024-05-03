/**
 * Interfaz que define la estructura de un objeto persona.
 * Contiene propiedades relacionadas con la información personal de una persona.
 */
// types.ts


export interface Persona {
  id?: number;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  address: string;
  birthdate: string;
}

