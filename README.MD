# Proyecto API de Juegos

Este proyecto es una API REST que proporciona información sobre juegos. A continuación se detallan las rutas disponibles y su funcionamiento.

## Rutas de la API

### 1. Obtener todos los juegos

- **Ruta:** `/api/games`
- **Método:** `GET`
- **Descripción:** Obtiene una lista de todas las consolas disponibles.
- **Respuesta:**
  ```json
  {
    "playstation":[{
      "id": "#1708796412345",
      "name":"PlayStation 1",
      "images": [
        "https://res.cloudinary.com/dxpkfx5b4/image/upload/v1735214645/ps1-md.webp",
        "https://res.cloudinary.com/dxpkfx5b4/image/upload/v1735214645/ps1-lg.webp"
      ],
      "games": [
        // Mostrando juegos
      ],
    }],
    // Más consolas...
  }
