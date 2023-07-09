package com.LeagueAnalytics.dto.leagueDTO;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import com.LeagueAnalytics.dto.LeagueEntryResumeDTO;
import com.LeagueAnalytics.dto.MatchResumedDTO;
import com.LeagueAnalytics.dto.SummonerNameDTO;
import com.LeagueAnalytics.dto.SummonerNameResumedDTO;

public class HomepageInfoDTO {

	private SummonerNameResumedDTO summoner;
	private List<LeagueEntryResumeDTO> leagueEntrys = Arrays.asList();
	private List<MatchResumedDTO> listMatchsResumed = Arrays.asList();

	public HomepageInfoDTO(SummonerNameDTO summoner, List<LeagueEntryDTO> leagueEntrys, List<MatchDTO> listmatchs) {
		this.summoner =  new SummonerNameResumedDTO(summoner);
        this.leagueEntrys = leagueEntrys.stream()
                .map(LeagueEntryResumeDTO::new)
                .collect(Collectors.toList());
        this.listMatchsResumed = listmatchs.stream()
        									.map(MatchResumedDTO::new)
        									.collect(Collectors.toList());
	}
	public HomepageInfoDTO() {}
	
	public SummonerNameResumedDTO getSummoner() {
		return summoner;
	}



	public void setSummoner(SummonerNameResumedDTO summoner) {
		this.summoner = summoner;
	}



	public List<LeagueEntryResumeDTO> getLeagueEntrys() {
		return leagueEntrys;
	}



	public void setLeagueEntrys(List<LeagueEntryResumeDTO> leagueEntrys) {
		this.leagueEntrys = leagueEntrys;
	}



	public List<MatchResumedDTO> getListMatchsResumed() {
		return listMatchsResumed;
	}



	public void setListMatchsResumed(List<MatchResumedDTO> listMatchsResumed) {
		this.listMatchsResumed = listMatchsResumed;
	}
	
	
}
