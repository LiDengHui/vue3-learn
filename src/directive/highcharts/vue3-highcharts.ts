import { defineComponent, h, onMounted, onUnmounted, PropType, Ref, ref, toRefs, watch } from 'vue';
import Highcharts, { Chart, Options } from 'highcharts'

const VueHightCharts = defineComponent({
  name: 'VueHighchart',
  props: {
    type: {
      type: String as PropType<keyof typeof Highcharts>,
      default: 'chart',
    },
    options: {
      type: Object as PropType<Options>,
      required: true,
    },
    redrawOnUpdate: {
      type: Boolean,
      default: true,
    },
    oneToOneUpdate: {
      type: Boolean,
      default: true,
    },
    animateOnUpdate: {
      type: Boolean,
      default: true,
    }
  },
  setup(props, ctx) {
    const chartRef = ref(null);

    const chart: Ref<Chart | null> = ref(null);

    const { options } = toRefs(props);

    if (options.value) {

      watch(options, (newValue) => {
        if (chart.value) {
          chart.value.update(newValue, props.redrawOnUpdate, props.oneToOneUpdate, props.animateOnUpdate);
        }
      }, {
        deep: true
      })
      onMounted(() => {
        chart.value = (Highcharts as any)[props.type](
          chartRef.value,
          options.value,
          () => {
            ctx.emit('rendered');
          }
        )
      })

      onUnmounted(() => {
        if (chart?.value) {
          chart.value.destroy();
        }
        ctx.emit('destroyed');
      })
    } else {
      console.error('请传递渲染函数组件必须的参数')
    }

    return {
      chartRef,
      chart
    }
  },

  render() {
    return h('div', {
      ref: 'chartRef',
      class: 'vue-highcharts'
    })
  }
})

export default VueHightCharts;