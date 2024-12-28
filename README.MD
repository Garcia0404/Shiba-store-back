# Proyecto API de Juegos

Este proyecto es una API REST que proporciona información sobre juegos. A continuación se detallan las rutas disponibles y su funcionamiento.

## Rutas de la API

### 1. Obtener todos los juegos

- **Ruta:** `/api/games`
- **Método:** `GET`
- **Descripción:** Obtiene una lista de todas los juegos disponibles.
- **Respuesta:**
  ```json
  [
    {
      "title": "Final Fantasy VII",
      "id": "#1708796412346",
      "description": "A genre-defining RPG that follows Cloud Strife in a quest to save the planet.",
      "rating": 9.7,
      "images": [
        "https://res.cloudinary.com/dxpkfx5b4/image/upload/v1735349857/games/ff7.webp"
      ],
      "details": {
        "developer": "Square",
        "release_date": "1997-01-31",
        "platform": "PS1"
      },
      "categories": ["RPG", "Adventure", "Fantasy"]
    } //Mostrando más juegos ...
  ]
  ```

### 2. Obtener todas las consolas

- **Ruta:** `/api/consoles`
- **Método:** `GET`
- **Descripción:** Obtiene una lista de todas las consolas disponibles.
- **Respuesta:**
  ```json
  [
    {
      "name": "PlayStation 1",
      "id": "#1708796412345",
      "images": [
        "https://res.cloudinary.com/dxpkfx5b4/image/upload/v1735214645/ps1-md.webp",
        "https://res.cloudinary.com/dxpkfx5b4/image/upload/v1735214645/ps1-lg.webp"
      ],
      "games": [
        //Mostrando juegos
      ]
    },
    //Mostrando más consolas
  ]
  ```
