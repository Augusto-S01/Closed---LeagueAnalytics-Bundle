package com.LeagueAnalytics.dto.leagueDTO;

public class MatchDTO {
	private MetadataDTO metadata;
    private InfoDTO info;

    public MetadataDTO getMetadata() {
        return metadata;
    }

    public void setMetadata(MetadataDTO metadata) {
        this.metadata = metadata;
    }

    public InfoDTO getInfo() {
        return info;
    }

    public void setInfo(InfoDTO info) {
        this.info = info;
    }
}
