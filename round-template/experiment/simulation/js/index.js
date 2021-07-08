<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
  <meta charset="utf-8">
  <title>Canvas</title>
  <link rel="stylesheet" href="css/index.css">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>
</head>

<body>
  <div class="outer_window">

    <div class="stimulation_window">
      <h3>SIGNAL MEASUREMENT</h3>
      <!-- CRO -->
      <!-- CRO graph -->
      <canvas id="canvas"></canvas>
      <!-- MEASUREMENT guide -->
      <button id="how_to_measure" type="button" class="btn btn-info button measurement" onclick="measurement_guide()">How to measure?</button>
      <!-- cro device  -->
      <canvas id="cro_canvas"></canvas>
      <!-- ON-OFF -->
      <div class="on_off form-check form-switch">
        <input id="on_off_cro" class="form-check-input" type="checkbox" id="on_off flexSwitchCheck" onclick="on_off_cro()">
        <label class="form-check-label" for="flexSwitchCheckDefault">On/Off</label>
      </div>
      <!-- Y-Position -->
      <div class="yposition">
        <label for="time_period">Y position</label><br>
        <input id="yposition" type="number" id="yposition" value="0" onchange="yposition()">
      </div>
      <!-- X-position -->
      <div class="xposition">
        <label for="time_period">X position</label><br>
        <input id="xposition" type="number" id="xposition" value="0" onchange="xposition()">
      </div>
      <!-- XY -->
      <div class="xy form-check form-switch">
        <input id="xy" class="form-check-input" type="checkbox" id="flexSwitchCheckDefault xy" onclick="xy()">
        <label class="form-check-label" for="flexSwitchCheckDefault">X-Y</label>
      </div>
      <!-- Focus -->
      <div class="focus form-check form-switch">
        <input id="focus" class="form-check-input" type="checkbox" id="flexSwitchCheckDefault focus" onclick="myfunc()">
        <label class="form-check-label" for="flexSwitchCheckDefault">Focus</label>
      </div>
      <!-- time Division -->
      <div class="time_division">
        <label for="">Time Division</label><br>
        <select id="time_division" class="time_division_input" id="time_division" onchange="timeperiod()">
          <option value="0.001">1ms Default</option>
          <option value="1">1 s</option>
          <option value="0.0001">0.1 ms</option>
          <option value="0.0002">0.2 ms</option>
          <option value="0.0005">0.5 ms</option>
          <option value="0.001">1 ms</option>
          <option value="0.002">2 ms</option>
          <option value="0.005">5 ms</option>
          <option value="0.05">50 ms</option>
          <option value="0.02">20 ms</option>
          <option value="0.01">10 ms</option>
          <option value="0.000001">1 µs</option>
          <option value="0.000002">2 µs</option>
          <option value="0.000005">5 µs</option>
          <option value="0.00001">10 µs</option>
          <option value="0.00002">20 µs</option>
          <option value="0.00005">50 µs</option>
        </select>
      </div>
      <!-- Y-Division -->
      <div class="y_division">
        <label for="">Y-Division</label><br>
        <select  class="ydivision_input" id="ydivision_input" onchange="ydivision()">
          <option value="1">1 V</option>
          <option value="2">2 V</option>
          <option value="5">5 V</option>
          <option value="10">10 V</option>
          <option value="0.1">0.1 V</option>
          <option value="0.2">0.2 V</option>
          <option value="0.5">0.5 V</option>
          <option value="0.001">1 mV</option>
          <option value="0.002">2 mV</option>
          <option value="0.005">5 mV</option>
        </select>
      </div>
      <button id="connect" type="button" class="btn btn-info button connect" onclick="connect_wire()">Connect</button>
      <button id="remove" type="button" class="btn btn-info button remove" onclick="remove_wire()">Remove</button>
      <!-- Function Generator -->
      <!-- Display -->
      <canvas id="display_canvas" width="200" height="50"></canvas>
      <!-- canva for Fg -->
      <canvas id="fg_canvas" width="350" height="150"></canvas>
      <!-- ON-FF For FG -->
      <div class="on_off_fg form-check form-switch">
        <label class="form-check-label" for="flexSwitchCheckDefault">On/Off</label>
        <input id="on_off_fg" class="form-check-input" type="checkbox" id="on_off flexSwitchCheck" onchange="on_off_fg()">

      </div>
      <!-- Amplitude  -->
      <div class="amplitude_fg">
        <label for="time_period">Amplitude(V)</label></label><br>
        <input id="amplitude" type="number" id="amplitude" name="" value="30" onchange="amplitude()">
      </div>
      <!-- Frequency  -->
      <div class="frequency_fg">
        <label for="Frequency">Frequency(Hz)</label></label><br>
        <input id="frequency" type="number" id="frequency" name="" value="5" onchange="freq()">
      </div>
      <!-- Type of Signal -->
      <div class="signal_class">
        <label for="">Signal</label><br>
        <select class="signal" id="signal_select" onchange="signal_selection()">
          <option value="1">Sine</option>
          <option value="2">Cos</option>t
          <option value="3">Sawtooth</option>
          <option value="4">Triangle</option>
          <option value="5">Square</option>
        </select>
      </div>
      <img src="images/wire.png" id="wire" alt="wire">

      <!-- Demo tour -->
      <button id="tour" type="button" class="btn btn-info button tour" onclick="tour()">Tour</button>
      <!-- connect demo -->
      <dialog id="connect_demo" class="demo">
        <p>Press the connect button to connect the CRO and Function Generator with wire</p>
        <img class="demo_img" src="images/left_arrow.png" alt="left_arrow">
      </dialog>
      <!-- on_off_cro -->
      <dialog id="onoff_cro_demo" class="demo">
        <p>Toggle the On/Off Switch to on the CRO for display</p>
        <img class="demo_img" src="images/down_arrow.png" alt="down_arrow">
      </dialog>
      <!-- on_off_function_generator -->
      <dialog id="onoff_fg_demo" class="demo">
 <img class="demo_img" src="images/right_arrow.png" alt="right_arrow">
        <p>Toggle the switch to on the Function Generator for setting the signals</p>

      </dialog>
      <!-- type of signal selection -->
      <dialog id="signal_select_demo" class="demo">
        <p>Choose the type of signal</p>
        <img class="demo_img" src="images/down_arrow.png" alt="down_arrow">
      </dialog>
      <!-- Amplitude of the signal -->
      <dialog id="amplitude_fg_demo" class="demo">
          <img class="demo_img" src="images/up_arrow.png" alt="up_arrow">
        <p>Set the amplitude of the signal</p>

      </dialog>
      <!-- Frequency of the signal -->
      <dialog id="frequency_fg_demo" class="demo">
        <p>Set the frequency of the signal</p>
        <img class="demo_img" src="images/down_arrow.png" alt="down_arrow">
      </dialog>
      <!-- Set the x-position -->
      <dialog id="xposition_cro_demo" class="demo">
        <p>Change the x-position to move the signal sidewards</p>
        <img class="demo_img" src="images/left_arrow.png" alt="left_arrow">
      </dialog>
      <!-- Set the x-division -->
      <dialog id="xdivision_cro_demo" class="demo">
        <p>Change the x-division to change the width of the signal</p>
        <img class="demo_img" src="images/left_arrow.png" alt="left_arrow">
      </dialog>
      <!-- Set the y-position -->
      <dialog id="yposition_cro_demo" class="demo">
        <p>Change the y-position to move the signal up and down</p>
        <img class="demo_img" src="images/left_arrow.png" alt="left_arrow">
      </dialog>
      <!-- Set the y-division -->
      <dialog id="ydivision_cro_demo" class="demo">
        <p>Change the y-position to change the height of the signal</p>
        <img class="demo_img" src="images/left_arrow.png" alt="left_arrow">
      </dialog>
      <!-- on the x-y switch -->
      <dialog id="xy_cro_demo" class="demo">
        <img class="demo_img" src="images/up_arrow.png" alt="up_arrow">
        <p>Toggle the switch to view the signal as vertical line to calculate the amplitude</p>
      </dialog>
      <!-- on the focus switch -->
      <dialog id="focus_cro_demo" class="demo">
        <img class="demo_img" src="images/up_arrow.png" alt="up_arrow">
        <p>Switch off the XY switch and toggle the focus switch to view the signal as Horizontal line</p>
      </dialog>
      <!-- Remove wire -->
      <dialog id="remove_wire_demo" class="demo">
        <p>Click to remove the wire and disconnect the CRO and function generator.Consider each division in the CRO axis as 10 units and measured signal parameter is displayed</p>
        <img class="demo_img" src="images/left_arrow.png" alt="left_arrow">
      </dialog>
      <!-- Pop up question 1 -->
      <dialog id="pop_up_quest_1" class="demo question">
        <p>1.)How do you calculate the RMS voltage of a Sine Wave?</p>
        <form class="" >
            <input class="answer" type="radio"  name="quest_1" value="1" > <label> Peak Voltage / √2 </label><br>
            <input class="answer" type="radio"  name="quest_1" value="0"> <label> Peak Voltage / √7</label><br>
            <input class="answer" type="radio"   name="quest_1" value="0" > <label>Peak Voltage / 2 </label><br>
            <input class="answer" type="radio"  name="quest_1" value="0" > <label>Peak Voltage / √3 </label>
        </form>
      </dialog>
      <!-- Pop up question 2 -->
      <dialog id="pop_up_quest_2" class="demo question">
        <p>2.)If the peak-to-peak value of sine wave is 60V what is the RMS value ?</p>
        <form class="" >
            <input class="answer" type="radio"  name="quest_1" value="0" > <label> 42.42 V</label><br>
            <input class="answer" type="radio"  name="quest_1" value="0"> <label>60 V </label><br>
            <input class="answer" type="radio"   name="quest_1" value="0" > <label>30 V</label><br>
            <input class="answer" type="radio"  name="quest_1" value="1" > <label>21.21V</label>
        </form>
      </dialog>
      <!-- Pop up question 3 -->
      <dialog id="pop_up_quest_3" class="demo question">
        <p>3.)If frequency = 10Hz, what is the time period? </p>
        <form class="" >
            <input class="answer" type="radio"  name="quest_1" value="0" > <label> 10s </label><br>
            <input class="answer" type="radio"  name="quest_1" value="0"> <label> 20s </label><br>
            <input class="answer" type="radio"   name="quest_1" value="0" > <label> 0.2s </label><br>
            <input class="answer" type="radio"  name="quest_1" value="1" > <label> 0.1s </label>
        </form>
      </dialog>
      <!-- Pop up question 4 -->
      <dialog id="pop_up_quest_4" class="demo question">
        <p>4.)The total area under the complete sine wave curve divided by the distance of the curve is known as?</p>
        <form class="" >
            <input class="answer" type="radio"  name="quest_1" value="0" > <label>Peak-to-peak value </label><br>
            <input class="answer" type="radio"  name="quest_1" value="0"> <label> RMS value</label><br>
            <input class="answer" type="radio"   name="quest_1" value="1" > <label>Average value </label><br>
            <input class="answer" type="radio"  name="quest_1" value="0" > <label>Effective value</label>
        </form>
      </dialog>
      <!-- Pop up question 5 -->
      <dialog id="pop_up_quest_5" class="demo question">
        <p>5.)What is the RMS value of sawtooth wave if the peak value is 20V?</p>
        <form class="" >
            <input class="answer" type="radio"  name="quest_1" value="0" > <label>20V </label><br>
            <input class="answer" type="radio"  name="quest_1" value="0"> <label>5.77V</label><br>
            <input class="answer" type="radio"   name="quest_1" value="0" > <label>23.09V </label><br>
            <input class="answer" type="radio"  name="quest_1" value="1" > <label>11.54V </label>
        </form>
      </dialog>
    </div>

    <div class="result_box">
      <h3 class="result_heading">RESULTS</h3>
      <div class="result_display">
        <table>
          <tr>
            <td>
              <p class="result_p">Time Period(s) </p>
            </td>
            <td>
              <p id="timeperiod_result" class="result_p"></p>
            </td>
          </tr>
          <tr>
            <td>
              <p class="result_p">Peak-to-Peak Voltage(V) </p>
            </td>
            <td>
              <p id="ptop_voltage_result" class="result_p"></p>
            </td>
          </tr>
          <tr>
            <td>
              <p class="result_p">RMS Voltage(V) </p>
            </td>
            <td>
              <p id="rms_voltage_result" class="result_p"></p>
            </td>
          </tr>
          <tr>
            <td>
              <p class="result_p">Average Voltage(V) </p>
            </td>
            <td>
              <p id="average_volatge_result" class="result_p"></p>
            </td>
          </tr>
          <tr>
            <td>
              <p class="result_p">Peak Voltage(V)</p>
            </td>
            <td>
              <p id="peak_voltage_result" class="result_p"></p>
            </td>
          </tr>
        </table>
        <br>
      </div>
    </div>
  </div>

  <script src="js/index.js" charset="utf-8"></script>
</body>

</html>
