-- CreateTable
CREATE TABLE "Player" (
    "player_id" TEXT NOT NULL,
    "gsis_id" TEXT,
    "depth_chart_position" TEXT,
    "last_name" TEXT,
    "birth_city" TEXT,
    "espn_id" TEXT,
    "injury_status" TEXT,
    "position" TEXT,
    "depth_chart_order" TEXT,
    "team_abbr" TEXT,
    "injury_notes" TEXT,
    "news_updated" TEXT,
    "college" TEXT,
    "birth_date" TEXT,
    "competitions" JSONB DEFAULT '[]',
    "rotoworld_id" TEXT,
    "oddsjam_id" TEXT,
    "birth_state" TEXT,
    "weight" TEXT,
    "injury_body_part" TEXT,
    "pandascore_id" TEXT,
    "birth_country" TEXT,
    "yahoo_id" TEXT,
    "status" TEXT,
    "stats_id" TEXT,
    "height" TEXT,
    "fantasy_data_id" TEXT,
    "full_name" TEXT,
    "hashtag" TEXT,
    "first_name" TEXT,
    "metadata" JSONB,
    "search_rank" TEXT,
    "high_school" TEXT,
    "rotowire_id" TEXT,
    "active" BOOLEAN,
    "swish_id" TEXT,
    "opta_id" TEXT,
    "team" TEXT,
    "fantasy_positions" JSONB,
    "search_last_name" TEXT,
    "search_full_name" TEXT,
    "sport" TEXT,
    "years_exp" TEXT,
    "age" TEXT,
    "sportradar_id" TEXT,
    "practice_description" TEXT,
    "number" TEXT,
    "practice_participation" TEXT,
    "search_first_name" TEXT,
    "injury_start_date" TEXT,

    CONSTRAINT "Player_pkey" PRIMARY KEY ("player_id")
);