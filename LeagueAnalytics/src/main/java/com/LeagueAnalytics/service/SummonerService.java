package com.LeagueAnalytics.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;

import com.LeagueAnalytics.dto.SummonerNameDTO;
import com.LeagueAnalytics.exception.SummonerNotFoudException;
import com.fasterxml.jackson.core.JacksonException;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@Service
public class SummonerService {
	@Value("${riotAPI.key}")
	private String riotAPI;

    public SummonerNameDTO getSummonerByNickname(String nickname)  {
        String url = "https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + nickname;
        RestTemplate restTemplate = new RestTemplate();
        ObjectMapper objectMapper = new ObjectMapper();
        HttpHeaders headers = new HttpHeaders();
        headers.add("X-Riot-Token", riotAPI);
        HttpEntity<String> entity = new HttpEntity<>(headers);
        try {
        	ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.GET, entity, String.class);  
        	SummonerNameDTO summoner = objectMapper.readValue(response.getBody(), SummonerNameDTO.class);        	
        	return summoner;
        }catch(HttpClientErrorException e) {
        	if(e.getStatusCode() == HttpStatus.NOT_FOUND) {
        		throw new SummonerNotFoudException("Summoner não encontrado");        		
        	}else throw e;
        }catch(JacksonException e) {
        	throw new Error("500 - Problema na deserialização da classe");
        }
    }
}
