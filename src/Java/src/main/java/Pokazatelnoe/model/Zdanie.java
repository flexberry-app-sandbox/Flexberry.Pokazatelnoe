package Pokazatelnoe.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Pokazatelnoe.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Здание
 */
@Entity(name = "IISPokazatelnoeЗдание")
@Table(schema = "public", name = "Здание")
public class Zdanie {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "КолвоЭтажей")
    private Integer колвоэтажей;

    @Column(name = "воЭтажей")
    private Integer воэтажей;

    @Column(name = "Номер")
    private Integer номер;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Gorod")
    @Convert("Gorod")
    @Column(name = "Город", length = 16, unique = true, nullable = false)
    private UUID _gorodid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Gorod", insertable = false, updatable = false)
    private Gorod gorod;


    public Zdanie() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getКолвоЭтажей() {
      return колвоэтажей;
    }

    public void setКолвоЭтажей(Integer колвоэтажей) {
      this.колвоэтажей = колвоэтажей;
    }

    public Integer getвоЭтажей() {
      return воэтажей;
    }

    public void setвоЭтажей(Integer воэтажей) {
      this.воэтажей = воэтажей;
    }

    public Integer getНомер() {
      return номер;
    }

    public void setНомер(Integer номер) {
      this.номер = номер;
    }


}