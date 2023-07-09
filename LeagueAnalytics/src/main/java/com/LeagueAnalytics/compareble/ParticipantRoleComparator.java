package com.LeagueAnalytics.compareble;
import java.util.Comparator;

import com.LeagueAnalytics.dto.leagueDTO.ParticipantDTO;

public class ParticipantRoleComparator implements Comparator<ParticipantDTO> {
    private final String[] positions = {"top", "JUNGLE", "MIDDLE", "BOTTOM", "UTILITY"};

    @Override
    public int compare(ParticipantDTO p1, ParticipantDTO p2) {
        int index1 = getPositionIndex(p1);
        int index2 = getPositionIndex(p2);
        return Integer.compare(index1, index2);
    }

    private int getPositionIndex(ParticipantDTO participant) {
        String position = participant.getIndividualPosition();
        for (int i = 0; i < positions.length; i++) {
            if (positions[i].equalsIgnoreCase(position)) {
                return i;
            }
        }
        return -1;
    }
}
