package com.LeagueAnalytics.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.LeagueAnalytics.dto.DetailsMatchDTO;
import com.LeagueAnalytics.dto.HomepageInfoDTO;
import com.LeagueAnalytics.dto.InfoDTO;
import com.LeagueAnalytics.dto.LeagueEntryDTO;
import com.LeagueAnalytics.dto.MatchDTO;
import com.LeagueAnalytics.dto.ParticipantDTO;
import com.LeagueAnalytics.dto.SummonerNameDTO;
import com.LeagueAnalytics.dto.SummonerNameResumedDTO;
import com.LeagueAnalytics.exception.SummonerNotFoudException;
import com.LeagueAnalytics.service.LeagueService;
import com.LeagueAnalytics.service.MatchService;
import com.LeagueAnalytics.service.SummonerService;

@RestController
@RequestMapping("/league")
@CrossOrigin("*")
public class LeagueController {
	@Value("${riotAPI.key}")
	private String riotAPI;
	
	@Autowired
	private SummonerService summonerService;
	@Autowired
	private LeagueService leagueService;
	@Autowired
	private MatchService matchService;
	
	@GetMapping(value = "/{nickname}")
	public ResponseEntity<?> resume(@PathVariable String nickname){
		SummonerNameDTO summoner = new SummonerNameDTO();
		try {
			summoner = summonerService.getSummonerByNickname(nickname);
		}catch(SummonerNotFoudException e) {
			return ResponseEntity.status(HttpStatusCode.valueOf(404)).body("Nao encontrado");
		}
		List<LeagueEntryDTO> leagueEntrys = leagueService.getLeagueEntrysBySummonerId(summoner.getId());
		List<String> ListMatchIDS = matchService.getListMatchIdsByPuuid(summoner.getPuuid(), 0l, 3l);
		List<MatchDTO> Listmatchs = new ArrayList<MatchDTO>();
		ListMatchIDS.forEach( matchId -> Listmatchs.add( matchService.getMatchByMatchId(matchId)) );
		
		HomepageInfoDTO homepageInfoDTO = new HomepageInfoDTO(summoner,leagueEntrys,Listmatchs);
		return ResponseEntity.ok(homepageInfoDTO);
	}
	
//	@GetMapping(value = "/verifySummoner/{nickname}")
//	public Boolean> verifySummoner(@PathVariable String nickname){
//		SummonerNameDTO summoner = new SummonerNameDTO();
//		summoner = summonerService.getSummonerByNickname(nickname);
//		return true;
//	}
	
	
	@GetMapping(value = "matchDetail/{matchID}")
	public ResponseEntity<DetailsMatchDTO> matchDetail(@PathVariable String matchID){
		MatchDTO matchDTO = matchService.getMatchByMatchId(matchID);
		DetailsMatchDTO dmatchDTO = new DetailsMatchDTO(matchDTO);
		
		return ResponseEntity.ok(dmatchDTO);
		
	}
}
