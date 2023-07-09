package com.LeagueAnalytics.dto;

import java.util.List;

import com.LeagueAnalytics.dto.leagueDTO.LeagueEntryDTO;

public class LeagueEntrySeparated {
    private LeagueEntryDTO RANKED_FLEX_SR;
    private LeagueEntryDTO RANKED_SOLO_5x5;

    public LeagueEntrySeparated(List<LeagueEntryDTO> legueEntrys) {
        for (LeagueEntryDTO entry : legueEntrys) {
            if (entry.getQueueType().equals("RANKED_FLEX_SR")) {
                RANKED_FLEX_SR = entry;
            } else if (entry.getQueueType().equals("RANKED_SOLO_5x5")) {
                RANKED_SOLO_5x5 = entry;
            }
        }
    }

    public LeagueEntryDTO getRANKED_FLEX_SR() {
        return RANKED_FLEX_SR;
    }

    public void setRANKED_FLEX_SR(LeagueEntryDTO RANKED_FLEX_SR) {
        this.RANKED_FLEX_SR = RANKED_FLEX_SR;
    }

    public LeagueEntryDTO getRANKED_SOLO_5x5() {
        return RANKED_SOLO_5x5;
    }

    public void setRANKED_SOLO_5x5(LeagueEntryDTO RANKED_SOLO_5x5) {
        this.RANKED_SOLO_5x5 = RANKED_SOLO_5x5;
    }
}
