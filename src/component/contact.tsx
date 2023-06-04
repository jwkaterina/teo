/** @jsx createElement */
import { createElement } from "../utils";
import { Reactish } from "../reactish";
import { MapAPI } from "../service/map";

export const Contact = (props: any) => {

    Reactish.useEffect([], () => {
        MapAPI.create()
        //do we have enough places
    });

    return <section id="contact-form">
        <div id="checkbox">
            <i class="far fa-check-circle fa-8x"></i>
        </div>
        <div id="contact-grid">
            <div id="map-container">
                <div id="map"></div>
            </div>
            <div id="form">
                <form action="">
                    <p class="upper">Drop me a line</p>
                    <div class="input-group">
                        <label class="upper" for="name">Name</label>
                        <input id="name" type="text"></input>
                        <div id="alert-1" class="invalid upper">
                            <div class="arrow"></div>
                            <p>This field is requied.</p>
                        </div>
                    </div>
                    <div class="input-group">
                        <label class="upper" for="email">Email</label>
                        <input id="email"></input>
                        <div id="alert-1" class="invalid upper">
                            <div class="arrow"></div>
                            <p>This field is requied.</p>
                        </div>
                        <div id="alert-2" class="invalid upper">
                            <div class="arrow"></div>
                            <p>Please Enter a Valid Email Adress.</p>
                        </div>
                    </div>
                    <div  class="input-group">
                        <label class="upper" for="message">Message</label>
                        <textarea name="message" id="message"></textarea>
                        <div id="alert-1" class="invalid upper">
                            <div class="arrow"></div>
                            <p>This field is requied.</p>
                        </div>
                    </div>
                    <button id="button" class="upper" type="submit">Send</button>
                </form>
            </div>
        </div>
        <div id="contact">
            <div class="icon-group">
                <i class="far fa-map fa-2x"></i> 
                <p class="upper">Based in Berlin, Germany</p>
            </div>
            <div class="icon-group">
                <i class="fas fa-mobile-alt fa-2x"></i>
                <p class="upper">Tel: +49 1234 567 8910</p>
            </div>
            <div class="icon-group">
                <i class="far fa-envelope fa-2x"></i>
                <p class="upper">Theodor@gmail.com</p>
            </div>
        </div>
    </section>
}