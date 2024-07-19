import { prisma } from "../../client";
import { errorMessages } from "../../utils/errorMessages";
import { convertIntegersToText } from "../../utils/convertIntegersToText";

export const getPlayers = async ({ page, limit, search }) => {
  const filters = {};
  if (search) {
    filters.OR = [
      { full_name: { contains: search, mode: "insensitive" } },
      { last_name: { contains: search, mode: "insensitive" } },
      { first_name: { contains: search, mode: "insensitive" } },
    ];
  }

  const players = await prisma.player.findMany({
    where: filters,
    skip: (page - 1) * limit,
    take: +limit,
  });

  if (players) {
    return { data: players };
  } else {
    return { error: errorMessages.players.p00 };
  }
};

export const getPlayer = async (id) => {
  const player = await prisma.player.findUnique({
    where: { player_id: id },
  });
  if (player) {
    return { data: player };
  } else {
    return { error: errorMessages.players.p01 };
  }
};

export const updatePlayers = async (oldPlayer, player_id) => {
  const player = convertIntegersToText(oldPlayer); // I'm converting datatypes to string because I think this schema is inconsistent probably mongoDB
  const update = await prisma.player.upsert({
    where: { player_id },
    update: player,
    create: player,
  });
  if (update) {
    return { data: update };
  } else {
    return { error: errorMessages.players.p02, id: player_id };
  }
};
