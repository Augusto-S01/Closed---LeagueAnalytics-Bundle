package com.LeagueAnalytics.dto.params;

public class ParamsMatchByPuuidDTO {

    private Long startTime;
    private Long endTime;
    private Long queue;
    private String type;
    private Integer start;
    private Integer count;
    private String puuid;

    public ParamsMatchByPuuidDTO(Long startTime, Long endTime, Long queue, String type, Integer start, Integer count,String puuid) {
        this.startTime = startTime;
        this.endTime = endTime;
        this.queue = queue;
        this.type = type;
        this.start = start;
        this.count = count;
        this.puuid =(puuid);
    }
    
    public ParamsMatchByPuuidDTO() {}



	public Long getStartTime() {
        return startTime;
    }

    public void setStartTime(Long startTime) {
        this.startTime = startTime;
    }

    public Long getEndTime() {
        return endTime;
    }

    public void setEndTime(Long endTime) {
        this.endTime = endTime;
    }

    public Long getQueue() {
        return queue;
    }

    public void setQueue(Long queue) {
        this.queue = queue;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Integer getStart() {
        return start;
    }

    public void setStart(Integer start) {
        this.start = start;
    }

    public Integer getCount() {
        return count;
    }

    public void setCount(Integer count) {
        this.count = count;
    }

	public String getPuuid() {
		return puuid;
	}

	public void setPuuid(String puuid) {
		this.puuid = puuid;
	}
}
