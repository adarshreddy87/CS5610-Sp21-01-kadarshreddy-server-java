package com.example.CS5610Sp2101kadarshreddyserverjava.services;

import com.example.CS5610Sp2101kadarshreddyserverjava.models.Widget;
import com.example.CS5610Sp2101kadarshreddyserverjava.repositories.WidgetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class WidgetService {

    @Autowired
    WidgetRepository repository;

    private List<Widget> widgets = new ArrayList<Widget>();
    {
        Widget w1 = new Widget(123l, "ABC123", "HEADING", 1, "Widgets for Topic ABC123");
        Widget w2 = new Widget(234l, "ABC123", "PARAGRAPH", 1, "Lorem Ipsum");
        Widget w3 = new Widget(345l, "ABC234", "HEADING", 2, "Widgets for Topic ABC234");
        Widget w4 = new Widget(456l, "ABC234", "PARAGRAPH", 1, "Lorem Ipsum");
        Widget w5 = new Widget(567l, "ABC234", "PARAGRAPH", 1, "Lorem Ipsum");

        widgets.add(w1);
        widgets.add(w2);
        widgets.add(w3);
        widgets.add(w4);
        widgets.add(w5);
    }

    public Widget createWidgetForTopic(Widget widget){
        return repository.save(widget);
//        Long id = (new Date()).getTime();
//        widget.setId(id);
//        widgets.add(widget);
//        return widget;
    }

    public List<Widget> findAllWidgets(){
        return repository.findAllWidgets();
//            return (List<Widget>) repository.findAll();
//        return widgets;
    }

    public List<Widget> findWidgetsForTopic(String topicId){
        return repository.findWidgetsForTopic(topicId);
//        List<Widget> ws = new ArrayList<Widget>();
//        for(Widget w:widgets){
//            if (w.getTopicId().equals(topicId)){
//                ws.add(w);
//            }
//
//         }
//        return ws;
    }

    public Widget findWidgetById(Long id) {
//        for(Widget w: widgets) {
//            if(w.getId().equals(id)) {
//                return w;
//            }
//        }
//        return null;
//        return  repository.findById(id).get();
        return repository.findWidgetsById(id);
    }

    public Integer deleteWidget(Long id){
            repository.deleteById(id);
            return 1;
//        int index=-1;
//        for(int i=0;i<widgets.size();i++){
//            if(widgets.get(i).getId().equals(id)){
//                index=i;
//            }
//        }
//        if(index>=0){
//            widgets.remove(index);
//            return 1;
//        }
//        return -1;
    }

    public Integer updateWidget(Long id, Widget widget){
        Widget originalWidget = this.findWidgetById(id);
        originalWidget.setText(widget.getText());
        repository.save(originalWidget);
        return 1;
//        for (int i =0 ;i<widgets.size();i++){
//            if(widgets.get(i).getId().equals(id)){
//                widgets.set(i,widget);
//                return 1;
//            }
//        }
//        return -1;
    }
}
