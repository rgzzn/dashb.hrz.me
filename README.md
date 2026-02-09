# Apple TV+ Dashboard Clone

This project is a clone of the Apple TV+ dashboard, built with React, Vite, and Tailwind CSS.

![Screenshot](./public/assets/screenshot-1.png)

## Features

*   **Responsive Design:** The dashboard is fully responsive and looks great on all devices.
*   **Component-Based Architecture:** The UI is built with reusable React components.
*   **Styling with Tailwind CSS:** The project uses Tailwind CSS for a utility-first styling approach.
*   **Fast Development with Vite:** Vite provides a fast and lean development experience for modern web projects.

## Proposed Feature: Suggerimenti intelligenti del giorno

Una sola funzionalità “smart” e proattiva, conservata e potenziata: un riepilogo giornaliero che unisce meteo, agenda e notizie in un’unica vista. L’obiettivo è offrire un’istantanea utile e immediata per la giornata, ottimizzata per la fruizione su Apple TV.

### Cosa include

*   **Riepilogo mattutino** con meteo attuale + prime ore, primi eventi dell’agenda e 3 headline dai feed RSS.
*   **Sintesi compatta e leggibile**: layout a tre colonne con gerarchie visive chiare, icone e micro‑indicatori per priorità e imminenza.
*   **Aggiornamenti automatici** programmati per fascia oraria (mattina, pranzo, sera) e refresh manuale rapido.

### Dettagli tecnici (linea guida)

*   **SummaryView composita** che aggrega i dati da `WeatherModel`, `CalendarManager` e `RSSModel`.
*   **Orchestrazione dei refresh** con task periodici basati su `@Observable` + `Task` programmati, oppure `BackgroundTasks` per riallineare i dati quando l’app è in background.
*   **Strategia di caching** con scadenze differenziate: meteo (breve), agenda (medio), RSS (medio‑breve) per ridurre chiamate e mantenere reattività.

## Getting Started

### Prerequisites

*   Node.js (v18 or higher)
*   npm or yarn

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/rgzzn/DashB-Site/
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd dashb-site
    ```

3.  **Install the dependencies:**

    ```bash
    npm install
    ```

### Running the Development Server

To start the development server, run the following command:

```bash
npm run dev
```

This will start the development server at `http://localhost:3000`.

## Building for Production

To create a production build of the app, run the following command:

```bash
npm run build
```

This will create a `dist` folder with the production-ready files.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
