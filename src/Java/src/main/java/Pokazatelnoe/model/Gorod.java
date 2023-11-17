package Pokazatelnoe.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Pokazatelnoe.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Город
 */
@Entity(name = "IISPokazatelnoeГород")
@Table(schema = "public", name = "Город")
public class Gorod {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Площадь")
    private Integer площадь;

    @Column(name = "Наименование")
    private String наименование;


    public Gorod() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getПлощадь() {
      return площадь;
    }

    public void setПлощадь(Integer площадь) {
      this.площадь = площадь;
    }

    public String getНаименование() {
      return наименование;
    }

    public void setНаименование(String наименование) {
      this.наименование = наименование;
    }


}