package com.LeagueAnalytics.dto.leagueDTO;

import java.util.List;
import java.util.stream.Collectors;

import com.LeagueAnalytics.compareble.ParticipantRoleComparator;
import com.LeagueAnalytics.dto.ParticipantDetailDTO;

public class DetailsMatchDTO {
	private long gameCreation;
	private long gameDuration; // in ms
    private String gameMode;
    private String gameType;
    private List<ParticipantDetailDTO> redTeam;
    private List<ParticipantDetailDTO> blueTeam;
    
    public DetailsMatchDTO() {}
    
    public DetailsMatchDTO(MatchDTO matchDTO) {
    	this.gameCreation = matchDTO.getInfo().getGameCreation();
    	this.gameMode = matchDTO.getInfo().getGameMode();
    	this.gameType = matchDTO.getInfo().getGameType();
    	this.gameDuration = matchDTO.getInfo().getGameEndTimestamp()- ( matchDTO.getInfo().getGameCreation() + matchDTO.getInfo().getGameDuration() );
    	ParticipantRoleComparator participantRoleComparator = new ParticipantRoleComparator();
		this.setBlueTeam(matchDTO.getInfo().getParticipants().stream()
				.filter( participante -> participante.getTeamId() == 100 )
				.sorted(participantRoleComparator)
				.map(participant -> new ParticipantDetailDTO(participant, this.gameDuration))
		        .collect(Collectors.toList()));
			this.redTeam = matchDTO.getInfo().getParticipants().stream()
					.filter( participante -> participante.getTeamId() == 200 )
					.sorted(participantRoleComparator)
					.map(participant -> new ParticipantDetailDTO(participant, this.gameDuration)) 
			        .collect(Collectors.toList());
    }
    
    
    

	public long getGameCreation() {
		return gameCreation;
	}

	public void setGameCreation(long gameCreation) {
		this.gameCreation = gameCreation;
	}

	public long getGameDuration() {
		return gameDuration;
	}

	public void setGameDuration(long gameDuration) {
		this.gameDuration = gameDuration;
	}

	public String getGameMode() {
		return gameMode;
	}

	public void setGameMode(String gameMode) {
		this.gameMode = gameMode;
	}

	public String getGameType() {
		return gameType;
	}

	public void setGameType(String gameType) {
		this.gameType = gameType;
	}

	public List<ParticipantDetailDTO> getRedTeam() {
		return redTeam;
	}

	public void setRedTeam(List<ParticipantDetailDTO> redTeam) {
		this.redTeam = redTeam;
	}

	public List<ParticipantDetailDTO> getBlueTeam() {
		return blueTeam;
	}

	public void setBlueTeam(List<ParticipantDetailDTO> blueTeam) {
		this.blueTeam = blueTeam;
	}
    
    
}
