package com.LeagueAnalytics.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.LeagueAnalytics.dto.LeagueEntrySeparated;
import com.LeagueAnalytics.dto.SummonerNameDTO;
import com.LeagueAnalytics.dto.leagueDTO.LeagueEntryDTO;
import com.LeagueAnalytics.exception.SummonerNotFoudException;
import com.LeagueAnalytics.service.LeagueService;

@RestController
@RequestMapping("/ranked")
@CrossOrigin("*")
public class RankedController {
	@Value("${riotAPI.key}")
	private String riotAPI;
	

	@Autowired
	private LeagueService leagueService;

	

	
	@GetMapping(value = "/{summonerID}")
	public ResponseEntity<?> getLeagueEntrysBySummonerID(@PathVariable String summonerID){
		try {
			List<LeagueEntryDTO> leagueEntrys = leagueService.getLeagueEntrysBySummonerId(summonerID);
			return ResponseEntity.ok(leagueEntrys);
		}catch(SummonerNotFoudException e) {
			return ResponseEntity.status(HttpStatusCode.valueOf(404)).body("Nao encontrado");
		}

	}
	@GetMapping(value = "/filter/{summonerID}")
	public ResponseEntity<?> getLeagueEntrysBySummonerIDFilter(@PathVariable String summonerID){
		try {
			List<LeagueEntryDTO> leagueEntrys = leagueService.getLeagueEntrysBySummonerId(summonerID);
			LeagueEntrySeparated leagueEntrySeparated = new LeagueEntrySeparated(leagueEntrys);
			return ResponseEntity.ok(leagueEntrySeparated);
		}catch(SummonerNotFoudException e) {
			return ResponseEntity.status(HttpStatusCode.valueOf(404)).body("Nao encontrado");
		}
	}

}
