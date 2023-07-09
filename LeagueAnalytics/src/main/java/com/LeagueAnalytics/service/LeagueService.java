package com.LeagueAnalytics.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.LeagueAnalytics.dto.LeagueEntryDTO;
import com.LeagueAnalytics.dto.SummonerNameDTO;
import com.fasterxml.jackson.core.JacksonException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

@Service
public class LeagueService {
	// Actual League-V4 | https://developer.riotgames.com/apis#league-v4
	@Value("${riotAPI.key}")
	private String riotAPI;
	
	
	public List<LeagueEntryDTO> getLeagueEntrysBySummonerId(String id) {
		String url = "https://br1.api.riotgames.com/lol/league/v4/entries/by-summoner/" + id;
		RestTemplate restTemplate = new RestTemplate();
		ObjectMapper objectMapper = new ObjectMapper();
		HttpHeaders headers = new HttpHeaders();
		headers.add("X-Riot-Token", riotAPI);
		HttpEntity<String> entity = new HttpEntity<>(headers);
		try {
			ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.GET, entity, String.class);
			List<LeagueEntryDTO> leagueEntry = objectMapper.readValue(response.getBody(), new TypeReference<List<LeagueEntryDTO>>() {});
			return leagueEntry;
		}catch(JacksonException e) {
        	throw new Error("500 - Problema na deserialização da classe");
        }
	}

}
