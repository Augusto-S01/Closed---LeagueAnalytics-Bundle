package com.LeagueAnalytics.dto;

import java.util.List;

public class PerkStyleDTO {
	private String description;
    private List<PerkStyleSelectionDTO> selections;
    private int style;

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<PerkStyleSelectionDTO> getSelections() {
        return selections;
    }

    public void setSelections(List<PerkStyleSelectionDTO> selections) {
        this.selections = selections;
    }

    public int getStyle() {
        return style;
    }

    public void setStyle(int style) {
        this.style = style;
    }
}
