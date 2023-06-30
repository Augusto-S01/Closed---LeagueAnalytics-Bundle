package com.LeagueAnalytics.compareble;
import java.util.Comparator;

import com.LeagueAnalytics.dto.ParticipantDTO;
import com.LeagueAnalytics.dto.ParticipantDetailDTO;



//TODO refazer essa logica aq
public class ParticipantDetailRoleComparator implements Comparator<ParticipantDetailDTO> {
    private final String[] positions = {"top", "JUNGLE", "MIDDLE", "BOTTOM", "UTILITY"};

    @Override
    public int compare(ParticipantDetailDTO p1, ParticipantDetailDTO p2) {
        int index1 = getPositionIndex(p1);
        int index2 = getPositionIndex(p2);
        return Integer.compare(index1, index2);
    }

    private int getPositionIndex(ParticipantDetailDTO p1) {
        String position = p1.getIndividualPosition();
        for (int i = 0; i < positions.length; i++) {
            if (positions[i].equalsIgnoreCase(position)) {
                return i;
            }
        }
        return -1;
    }
}
