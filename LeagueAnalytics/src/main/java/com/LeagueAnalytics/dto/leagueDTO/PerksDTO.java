package com.LeagueAnalytics.dto.leagueDTO;

import java.util.List;

public class PerksDTO {
	private PerkStatsDTO statPerks;
    private List<PerkStyleDTO> styles;

    public PerkStatsDTO getStatPerks() {
        return statPerks;
    }

    public void setStatPerks(PerkStatsDTO statPerks) {
        this.statPerks = statPerks;
    }

    public List<PerkStyleDTO> getStyles() {
        return styles;
    }

    public void setStyles(List<PerkStyleDTO> styles) {
        this.styles = styles;
    }
}

