package com.example.CS5610Sp2101kadarshreddyserverjava.repositories;

import com.example.CS5610Sp2101kadarshreddyserverjava.models.Widget;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface WidgetRepository extends CrudRepository<Widget,Long> {

    @Query(value = "select * from widgets", nativeQuery = true)
    public List<Widget> findAllWidgets();

    @Query(value = "select * from widgets where id=:wid", nativeQuery = true)
    public Widget findWidgetsById(@Param("wid") Long widgetId);

    @Query(value = "select * from widgets where topic_id=:tid", nativeQuery = true)
    public List<Widget> findWidgetsForTopic(@Param("tid") String topicId);

}
