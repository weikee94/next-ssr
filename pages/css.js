import React, { Component } from "react";

export default class css extends Component {
  render() {
    return (
      <div>
        <div>
          <ul>
            <li>grid-template-column prefer using fr</li>
            <li>grid-row-gap</li>
            <li>grid-column-gap</li>
            <li>grid-gap</li>
            <li>grid-auto-rows (height)</li>
            <li>
              justify-items (horizontal, default is stretch, others: start,
              center, end)
            </li>
            <li>
              align-items (vertical, default is stretch, others: start, center,
              end)
            </li>
          </ul>
        </div>
        <div className="wrapperOne">
          <div>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui iste
            ipsum aut quam provident culpa non laborum, a quos incidunt unde
            veritatis pariatur veniam ratione fugiat soluta ut? Exercitationem,
            sequi.
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus molestiae dolore quasi saepe ipsam earum vel aut,
            maxime quia asperiores repudiandae omnis eveniet obcaecati rerum.
            Commodi, explicabo facilis! Expedita, odit!
          </div>
          <div>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis
            sequi quis distinctio provident! Accusamus dolorem consequatur earum
            reprehenderit incidunt autem molestias repudiandae fugiat impedit
            nisi enim quidem, necessitatibus a iure!
          </div>
        </div>
        <div className="wrapperTwo">
          <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi,
            totam deleniti aliquam ducimus, quas optio perspiciatis quidem ullam
            assumenda, animi ab rerum in itaque ex asperiores pariatur.
            Assumenda, quae ut.
          </div>
          <div>Lorem ipsum dolor sit.</div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            illo labore voluptates voluptatum, qui inventore doloremque
            accusamus, sed non ut dolores molestiae corrupti, eos impedit. Enim
            eligendi nulla voluptatibus culpa optio beatae fugiat quaerat quae
            ullam inventore, perspiciatis ut sint. Facilis ab rem impedit ipsam
            accusantium suscipit praesentium laboriosam tenetur delectus
            perspiciatis earum temporibus hic, in modi inventore vitae, quasi
            dignissimos labore mollitia adipisci. Quo aut praesentium tempora
            odio atque nostrum quibusdam, neque exercitationem voluptas esse
            laudantium dignissimos! Aperiam, tempora.
          </div>
        </div>
        <div className="wrapperThree">
          <div>Lorem ipsum dolor sit.</div>
          <div>Lorem ipsum dolor sit amet consectetur.</div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing.</div>
          <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
          <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
            autem eveniet deleniti ea. Consequuntur ducimus provident ullam
            optio voluptatibus! Nam vitae mollitia consequatur est, sint quos
            quae nostrum ullam repellendus laboriosam optio veniam inventore
            quia voluptatem, cumque iste qui ex necessitatibus placeat impedit
            aperiam suscipit perspiciatis vel. Temporibus impedit sed
            perspiciatis recusandae, iusto ducimus repudiandae doloremque
            incidunt nulla aliquam exercitationem, quam dolores itaque quae
            reiciendis voluptatibus sint! Officiis, ea asperiores omnis
            reiciendis optio, assumenda dolores porro deleniti, nisi quod
            impedit!
          </div>
        </div>
        <div className="wrapperFour">
          <div className="nested">
            <div>Lorem</div>
            <div>Lorem</div>
            <div>Lorem</div>
            <div>Lorem</div>
            <div>Lorem</div>
            <div>Lorem</div>
            <div>Lorem</div>
          </div>
          <div className="wrapperFourNested">
            <div>
              <span>Lorem</span>
            </div>
            <div>Lorem</div>
            <div>Lorem</div>
          </div>
        </div>
        <div className="wrapperFive">
          <img
            style={{ width: "100%" }}
            src="/static/cssgrid.jpg"
            alt="roadmap"
          />
          <div className="wrapperFiveNested">
            <div className="box1">box1</div>
            <div className="box2">box2</div>
          </div>
        </div>

        <style jsx>{`
          .wrapperOne {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-gap: 1em;
          }
          .wrapperOne > div {
            background: #eee;
            padding: 1em;
          }
          .wrapperTwo {
            display: grid;
            grid-template-columns: 4fr 1fr;
            grid-gap: 1em;
            padding-top: 1em;
          }
          .wrapperTwo > div {
            background: #eee;
            padding: 1em;
          }
          .wrapperThree {
            display: grid;
            padding-top: 1em;
            grid-gap: 1em;
            grid-template-columns: repeat(5, 1fr);
            grid-auto-rows: minmax(100px, auto);
          }
          .wrapperThree > div {
            background: #eee;
            padding: 1em;
          }
          .wrapperFour {
            display: grid;
            padding-top: 1em;
            grid-gap: 1em;
            grid-template-columns: repeat(3, 1fr);
            grid-auto-rows: minmax(100px, auto);
          }
          .nested {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 1em;
            grid-auto-rows: minmax(100px, auto);
          }
          .nested > div {
            border: 1px solid #333;
            padding: 0.5em;
          }
          .wrapperFour > div {
            background: #eee;
            padding: 1em;
          }
          .wrapperFourNested {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 1em;
            grid-auto-rows: minmax(20px, auto);
          }
          .wrapperFourNested > div {
            border: 1px solid #333;
            padding: 0.5em;
            text-align: center;
          }
          .wrapperFourNested > div > span {
            align-items: center;
          }
          .wrapperFive {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 1em;
            padding-top: 1em;
          }
          .wrapperFive > div {
            background: #eee;
            padding: 1em;
          }
          .wrapperFiveNested {
            display: grid;
            grid-template-columns: 1fr 2fr 1fr;
            grid-gap: 1em;
            grid-auto-rows: 20px;
          }
          .box1 {
            grid-column: 1/3;
          }
        `}</style>
      </div>
    );
  }
}
