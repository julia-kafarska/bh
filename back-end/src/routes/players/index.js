import axios from "axios";
import {
  getPlayer,
  getPlayers,
  updatePlayers,
} from "../../controllers/players/index";
import { errorMonitoring } from "../../logger";
import { errorMessages } from "../../utils/errorMessages";

const initPlayers = (app) => {
  // Get all players with pagination and filtering
  app.get("/players", async (req, res) => {
    try {
      const { page = 1, limit = 10, search } = req.query;
      const players = await getPlayers({ page, limit, search });
      res.json(players);
    } catch (e) {
      errorMonitoring(e);
      res.status(500).json({ error: errorMessages.players.p00 });
    }
  });

  // Get a single player by ID
  app.get("/players/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const players = await getPlayer(id);
      res.json(players);
    } catch (e) {
      errorMonitoring(e);
      res.status(500).json({ error: errorMessages.server.s00 });
    }
  });

  // Request databse update from Player API
  app.post("/players/update", async (req, res) => {
    try {
      const { data } = await axios.get(process.env.PLAYERS_API);

      const playersUpdate = [];
      for (const player_id in data) {
        if (!isNaN(Number(player_id))) {
          const updatedPlayer = await updatePlayers(data[player_id], player_id);
          playersUpdate.push(updatedPlayer);
        }
      }
      res.json({ data: `updated players ${playersUpdate.length}` });
    } catch (e) {
      errorMonitoring(e);
      res.status(500).json({ error: errorMessages.players.p02 });
    }
  });
};
module.exports = { initPlayers };
