package com.LeagueAnalytics.dto;

import java.util.List;

public class TeamDTO {
    private List<BanDTO> bans;
    private ObjectivesDTO objectives;
    private long teamId;
    private boolean win;

    public List<BanDTO> getBans() { return bans; }
    public void setBans(List<BanDTO> value) { this.bans = value; }

    public ObjectivesDTO getObjectives() { return objectives; }
    public void setObjectives(ObjectivesDTO value) { this.objectives = value; }

    public long getTeamId() { return teamId; }
    public void setTeamId(long value) { this.teamId = value; }

    public boolean getWin() { return win; }
    public void setWin(boolean value) { this.win = value; }
}
