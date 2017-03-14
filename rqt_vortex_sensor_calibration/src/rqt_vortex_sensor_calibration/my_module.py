#RQT VORTEX SENSOR CALIBRATION PLUGIN

import os
import rospkg
import rospy

from qt_gui.plugin import Plugin
from python_qt_binding import loadUi
from python_qt_binding.QtWidgets import QWidget, QGraphicsView
from python_qt_binding.QtGui import QColor

from std_msgs.msg import String
from nav_msgs.msg import Odometry


class MyPlugin(Plugin):

    def __init__(self, context):
        #PLUGIN CODE
        super(MyPlugin, self).__init__(context)

        # Give QObjects reasonable names
        self.setObjectName('MyPlugin')
        rp = rospkg.RosPack()

        # Process standalone plugin command-line arguments
        from argparse import ArgumentParser
        parser = ArgumentParser()
        # Add argument(s) to the parser.
        parser.add_argument("-q", "--quiet", action="store_true",
                      dest="quiet",
                      help="Put plugin in silent mode")
        args, unknowns = parser.parse_known_args(context.argv())
        if not args.quiet:
            print 'arguments: ', args
            print 'unknowns: ', unknowns

        # Create QWidget
        self._widget = QWidget()
        ui_file = os.path.join(rp.get_path('rqt_vortex_sensor_calibration'), 'resource', 'MyPlugin.ui')
        
        # Extend the widget with all attributes and children from UI file
        loadUi(ui_file, self._widget)

        # Give QObjects reasonable names
        self._widget.setObjectName('MyPluginUi')

        #Makes it possible to open more than one of each plugin
        if context.serial_number() > 1:
            self._widget.setWindowTitle(self._widget.windowTitle() + (' (%d)' % context.serial_number()))
        # Add widget to the user interface
        context.add_widget(self._widget)


        #INIT
        self._widget.lineAccelerometer.setReadOnly(True)
        self._widget.lineGyroscope.setReadOnly(True)
        self._widget.lineMagnetometer.setReadOnly(True)

        #self._widget.lineAccelerometer.setText(str(0))
        self.line_color(0, self._widget.lineAccelerometer)
        self.line_color(2, self._widget.lineGyroscope)
        self.line_color(3, self._widget.lineMagnetometer)


        #Subscriber
        #self.sub = rospy.Subscriber("/sensors/diagnostics", DiagnosticStatus, self.callback)

    def line_color(self, status, line):
        if status == 0:
            line.setText(str(status))
            line.setStyleSheet("""QLineEdit {
            background-color: red; 
            color: black;
            }""")

        elif status == 1:
            line.setText(str(status))
            line.setStyleSheet("""QLineEdit {
            background-color: red; 
            color: black;
            }""")

        elif status == 2:
            line.setText(str(status))
            line.setStyleSheet("""QLineEdit {
            background-color: orange; 
            color: black;
            }""")

        elif status == 3:
            line.setText(str(status))
            line.setStyleSheet("""QLineEdit {
            background-color: green; 
            color: black;
            }""")

        else :
            line.setText('---')
            line.setStyleSheet("""QLineEdit {
            background-color: red; 
            color: black;
            }""")


    def shutdown_plugin(self):
        #self.sub.unregister()
        pass
    def save_settings(self, plugin_settings, instance_settings):
        # TODO save intrinsic configuration, usually using:
        # instance_settings.set_value(k, v)
        pass

    def restore_settings(self, plugin_settings, instance_settings):
        # TODO restore intrinsic configuration, usually using:
        # v = instance_settings.value(k)
        pass


 #   def callback(self, sensor):
 #    	


