package com.LeagueAnalytics.service;

import java.lang.reflect.Field;
import java.util.List;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpServerErrorException;
import org.springframework.web.client.RestTemplate;

import com.LeagueAnalytics.dto.leagueDTO.MatchDTO;
import com.LeagueAnalytics.dto.params.ParamsMatchByPuuidDTO;
import com.fasterxml.jackson.core.JacksonException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

@Service
public class MatchService {
	@Value("${riotAPI.key}")
	private String riotAPI;
	
	public List<String> getListMatchIdsByPuuid(String puuid, Long startIndex, Long count){
		String url = "https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/" + puuid + "/ids?start=" + startIndex + "&count=" + count;
		RestTemplate restTemplate = new RestTemplate();
		ObjectMapper objectMapper = new ObjectMapper();
		HttpHeaders headers = new HttpHeaders();
		headers.add("X-Riot-Token", riotAPI);
		
		HttpEntity<String> entity = new HttpEntity<>(headers);
		
		try {
			ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.GET, entity, String.class);
			List<String> leagueEntry = objectMapper.readValue(response.getBody(), new TypeReference<List<String>>() {});
			return leagueEntry;
		}catch(JacksonException e) {
        	throw new Error("500 - Problema na deserialização da classe");
        }
	}
	
	public MatchDTO getMatchByMatchId(String matchId) {
		String url = "https://americas.api.riotgames.com/lol/match/v5/matches/"+ matchId;
		RestTemplate restTemplate = new RestTemplate();
		ObjectMapper objectMapper = new ObjectMapper();
		HttpHeaders headers = new HttpHeaders();
		headers.add("X-Riot-Token", riotAPI);
		headers.add("Accept", "application/json");
		
		HttpEntity<String> entity = new HttpEntity<>(headers);
		
		try {
			ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.GET, entity, String.class);
			MatchDTO matchDTO = objectMapper.readValue(response.getBody(), MatchDTO.class);
			return matchDTO;
		}catch(JacksonException e) {
        	throw new Error("500 - Problema na deserialização da classe");
        }catch (HttpServerErrorException e) {
            // Trata o erro interno do servidor
            System.out.println("Erro interno do servidor: " + e.getMessage());
            return null; // Retorna um valor padrão (nulo) ou trata de outra forma adequada
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
	}

	public List<String> getMoreMatches(Long matchesDisplayed, Long matchesCount, String puuid) {
		String url = "https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/" 
		+ puuid 
		+ "/ids?start=" 
		+ matchesDisplayed 
		+"&count=" 
		+ matchesCount;
		RestTemplate restTemplate = new RestTemplate();
		ObjectMapper objectMapper = new ObjectMapper();
		HttpHeaders headers = new HttpHeaders();
		headers.add("X-Riot-Token", riotAPI);
		
		HttpEntity<String> entity = new HttpEntity<>(headers);
		
		try {
			ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.GET, entity, String.class);
			List<String> leagueEntry = objectMapper.readValue(response.getBody(), new TypeReference<List<String>>() {});
			return leagueEntry;
		}catch(JacksonException e) {
        	throw new Error("500 - Problema na deserialização da classe");
        }

		
	}

	public List<String> getMatchIDResumedByPuuid(ParamsMatchByPuuidDTO params) {
		String baseUrl = "https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/" + params.getPuuid() + "/ids";
		baseUrl = addOptionalParams(baseUrl, params);
		
		RestTemplate restTemplate = new RestTemplate();
		ObjectMapper objectMapper = new ObjectMapper();
		HttpHeaders headers = new HttpHeaders();
		headers.add("X-Riot-Token", riotAPI);
		HttpEntity<String> entity = new HttpEntity<>(headers);
		
		try {
			ResponseEntity<String> response = restTemplate.exchange(baseUrl, HttpMethod.GET, entity, String.class);
			List<String> leagueEntry = objectMapper.readValue(response.getBody(), new TypeReference<List<String>>() {});
			return leagueEntry;
		}catch(JacksonException e) {
        	throw new Error("500 - Problema na deserialização da classe");
        }
	}
	
	
	private String addOptionalParams(String baseUrl, ParamsMatchByPuuidDTO params) {
	    boolean primeiroParametro = true;
	    for (Field field : ParamsMatchByPuuidDTO.class.getDeclaredFields()) {
	        try {
	            field.setAccessible(true);
	            Object value = field.get(params);
	            String name = field.getName();
	            if (value != null && !name.equals("puuid")) {
	                String paramName = field.getName();
	                String paramValue = value.toString();
	                baseUrl += (primeiroParametro ? "?" : "&") + paramName + "=" + paramValue;
	                primeiroParametro = false;
	            }
	        } catch (IllegalAccessException e) {
	            e.printStackTrace();
	        }
	    }
	    return baseUrl;
	}

	
}
