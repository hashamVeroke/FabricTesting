package com.fabrictexting

import android.graphics.Color
import com.facebook.react.module.annotations.ReactModule
import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.ViewManagerDelegate
import com.facebook.react.uimanager.annotations.ReactProp
import com.facebook.react.viewmanagers.FabricTestingViewManagerInterface
import com.facebook.react.viewmanagers.FabricTestingViewManagerDelegate

@ReactModule(name = FabricTestingViewManager.NAME)
class FabricTestingViewManager : SimpleViewManager<FabricTestingView>(),
  FabricTestingViewManagerInterface<FabricTestingView> {
  private val mDelegate: ViewManagerDelegate<FabricTestingView>

  init {
    mDelegate = FabricTestingViewManagerDelegate(this)
  }

  override fun getDelegate(): ViewManagerDelegate<FabricTestingView>? {
    return mDelegate
  }

  override fun getName(): String {
    return NAME
  }

  public override fun createViewInstance(context: ThemedReactContext): FabricTestingView {
    return FabricTestingView(context)
  }

  @ReactProp(name = "color")
  override fun setColor(view: FabricTestingView?, color: String?) {
    view?.setBackgroundColor(Color.parseColor(color))
  }

  companion object {
    const val NAME = "FabricTestingView"
  }
}
