// Importamos el tipo de dato IPersona y la clase BackendClient
import { Persona } from "../types/persona.ts";
import { BackendClient } from "./BackendClient";

// Clase PersonaService que extiende BackendClient para interactuar con la API de personas
export class PersonaService extends BackendClient<Persona> {}