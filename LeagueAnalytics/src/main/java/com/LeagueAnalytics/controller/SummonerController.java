package com.LeagueAnalytics.controller;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collector;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.LeagueAnalytics.dto.DetailsMatchDTO;
import com.LeagueAnalytics.dto.HomepageInfoDTO;
import com.LeagueAnalytics.dto.InfoDTO;
import com.LeagueAnalytics.dto.LeagueEntryDTO;
import com.LeagueAnalytics.dto.MatchDTO;
import com.LeagueAnalytics.dto.MatchResumedDTO;
import com.LeagueAnalytics.dto.ParticipantDTO;
import com.LeagueAnalytics.dto.SummonerNameDTO;
import com.LeagueAnalytics.dto.SummonerNameResumedDTO;
import com.LeagueAnalytics.dto.params.ParamsMatchByPuuidDTO;
import com.LeagueAnalytics.exception.SummonerNotFoudException;
import com.LeagueAnalytics.service.LeagueService;
import com.LeagueAnalytics.service.MatchService;
import com.LeagueAnalytics.service.SummonerService;

@RestController
@RequestMapping("/summoner")
@CrossOrigin("*")
public class SummonerController {
	@Value("${riotAPI.key}")
	private String riotAPI;
	
	@Autowired
	private SummonerService summonerService;
	@Autowired
	private LeagueService leagueService;
	@Autowired
	private MatchService matchService;
	
	
	@GetMapping(value = "/{region}/{nickname}")
	public ResponseEntity<?> getSummonerByNickNameAndRegion(@PathVariable String nickname){
		SummonerNameDTO summoner = new SummonerNameDTO();
		try {
			summoner = summonerService.getSummonerByNickname(nickname);
			return ResponseEntity.ok(summoner);
		}catch(SummonerNotFoudException e) {
			return ResponseEntity.status(HttpStatusCode.valueOf(404)).body("Nao encontrado");
		}
		
	};
	
	@GetMapping(value = "/verifySummoner/{nickname}")
	public ResponseEntity<Boolean> verifySummoner(@PathVariable String nickname){
		try {
			SummonerNameDTO summoner = new SummonerNameDTO();
			summoner = summonerService.getSummonerByNickname(nickname);
			return ResponseEntity.ok().build();
		}catch(SummonerNotFoudException e ) {
			return ResponseEntity.notFound().build();
		}
	};

}
