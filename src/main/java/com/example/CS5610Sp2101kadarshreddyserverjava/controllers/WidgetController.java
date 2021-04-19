package com.example.CS5610Sp2101kadarshreddyserverjava.controllers;

import com.example.CS5610Sp2101kadarshreddyserverjava.models.Widget;
import com.example.CS5610Sp2101kadarshreddyserverjava.services.WidgetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class WidgetController {
    @Autowired
    WidgetService service;

    @GetMapping("/api/widgets")
    public List<Widget> findAllWidgets(){
        return service.findAllWidgets();
    }

    @GetMapping("/api/topics/{tid}/widgets")
    public List<Widget> findWidgetsForTopic(
            @PathVariable("tid") String topicId){
        return service.findWidgetsForTopic(topicId);
    }

    @GetMapping("/api/widgets/{wid}")
    public Widget findWidgetById(
            @PathVariable("wid") Long id) {
        return service.findWidgetById(id);
    }
    @PostMapping("/api/topics/{tid}/widgets")
    public Widget createWidgetForTopic(
            @PathVariable("tid") String topicId,
            @RequestBody Widget widget){
        widget.setTopicId(topicId);
        return service.createWidgetForTopic(widget);
    }

    @PutMapping("/api/widgets/{wid}")
    public Integer updateWidget(
            @PathVariable("wid") Long id,
            @RequestBody Widget widget){
        return service.updateWidget(id,widget);
    }

    @DeleteMapping("/api/widgets/{wid}")
    public Integer deleteWidget(
            @PathVariable("wid") Long id){
        return service.deleteWidget(id);
    }
}
