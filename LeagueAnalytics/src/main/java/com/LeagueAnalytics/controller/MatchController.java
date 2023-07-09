package com.LeagueAnalytics.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.LeagueAnalytics.dto.MatchResumedDTO;
import com.LeagueAnalytics.dto.leagueDTO.DetailsMatchDTO;
import com.LeagueAnalytics.dto.leagueDTO.MatchDTO;
import com.LeagueAnalytics.dto.params.ParamsMatchByPuuidDTO;
import com.LeagueAnalytics.service.MatchService;

@RestController
@RequestMapping("/match")
@CrossOrigin("*")
public class MatchController {
	@Value("${riotAPI.key}")
	private String riotAPI;
	
	@Autowired
	private MatchService matchService;
	
	
	@GetMapping(value = "/matchResumedByPuuid/{puuid}")
	public List<MatchResumedDTO> getMatches(
	        @PathVariable String puuid,
	        @RequestParam(required = false) Long startTime,
	        @RequestParam(required = false) Long endTime,
	        @RequestParam(required = false) Long queue,
	        @RequestParam(required = false) String type,
	        @RequestParam(required = false) Integer start,
	        @RequestParam(required = false) Integer count) {
			ParamsMatchByPuuidDTO  params = new ParamsMatchByPuuidDTO(startTime,endTime,queue,type,start,count,puuid);
			List<String> matchesID = matchService.getMatchIDResumedByPuuid(params);
			return matchesID.stream()
				.map(matchID -> matchService.getMatchByMatchId(matchID))
				.map(MatchResumedDTO::new).collect(Collectors.toList());
	}
	
	@GetMapping(value = "matchDetail/{matchID}")
	public ResponseEntity<DetailsMatchDTO> matchDetail(@PathVariable String matchID){
		MatchDTO matchDTO = matchService.getMatchByMatchId(matchID);
		DetailsMatchDTO dmatchDTO = new DetailsMatchDTO(matchDTO);
		
		return ResponseEntity.ok(dmatchDTO);
		
	}

}
