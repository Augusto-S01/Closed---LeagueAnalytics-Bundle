package com.LeagueAnalytics.dto;

import java.util.List;

public class HomepageInfoDTO {

	SummonerNameResumedDTO summoner;
	LeagueEntryResumeDTO leagueEntrys;
	public HomepageInfoDTO(SummonerNameDTO summoner, List<LeagueEntryDTO> leagueEntrys, List<MatchDTO> listmatchs) {
		this.summoner =  new SummonerNameResumedDTO(summoner);
		this.leagueEntrys = new LeagueEntryResumeDTO(null)
	}
	
	public HomepageInfoDTO() {
		
	}
	
	
}
